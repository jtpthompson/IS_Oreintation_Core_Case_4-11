from flask import Flask, request, jsonify, send_from_directory
import requests
import json
from pathlib import Path


# ==========================================================
# SETUP
# ==========================================================

app = Flask(__name__)

# Find the main project folder
PROJECT_ROOT = Path(__file__).resolve().parent.parent


# ==========================================================
# SERVE WEBSITE
# ==========================================================

@app.route("/")
def home():

    return send_from_directory(
        PROJECT_ROOT,
        "index.html"
    )


@app.route("/practice")
def practice():

    return send_from_directory(
        PROJECT_ROOT,
        "practice.html"
    )


@app.route("/discovery")
def discovery():

    return send_from_directory(
        PROJECT_ROOT,
        "discovery.html"
    )


# ==========================================================
# GRADE BEHAVIORAL INTERVIEW
# ==========================================================

@app.route("/grade-interview", methods=["POST"])
def grade_interview():

    # ------------------------------------------------------
    # Get information from website
    # ------------------------------------------------------

    data = request.get_json()

    question1 = data["question1"]
    answer1 = data["answer1"]

    question2 = data["question2"]
    answer2 = data["answer2"]

    question3 = data["question3"]
    answer3 = data["answer3"]


    # ======================================================
    # AI PROMPT
    # ======================================================

    prompt = f"""
You are a professional business interview coach.

Evaluate the candidate's three behavioral
interview answers.

Use the STAR method:

Situation:
Did the candidate explain the situation?

Task:
Did the candidate explain what needed
to be accomplished?

Action:
Did the candidate clearly explain what
THEY personally did?

Result:
Did the candidate explain the outcome?

Also evaluate:

- Communication
- Specificity
- Problem solving
- Professionalism
- Clarity

Give each question a score from 1 to 10.

Then give an overall score from 1 to 10.

Be encouraging and constructive.

Focus on the quality of the interview
responses.

Do NOT judge the candidate based on:

- Race
- Gender
- Age
- Religion
- Disability
- Other personal characteristics

Do not heavily penalize grammar or spelling.
Focus on the candidate's ideas and interview
skills.

--------------------------------------------------

QUESTION 1:

{question1}

ANSWER 1:

{answer1}

--------------------------------------------------

QUESTION 2:

{question2}

ANSWER 2:

{answer2}

--------------------------------------------------

QUESTION 3:

{question3}

ANSWER 3:

{answer3}

--------------------------------------------------

Return ONLY valid JSON.

Use exactly this structure:

{{
    "overall_score": 0,

    "questions": [

        {{
            "score": 0,
            "strengths": [
                "strength 1",
                "strength 2"
            ],
            "improvement": "specific improvement"
        }},

        {{
            "score": 0,
            "strengths": [
                "strength 1",
                "strength 2"
            ],
            "improvement": "specific improvement"
        }},

        {{
            "score": 0,
            "strengths": [
                "strength 1",
                "strength 2"
            ],
            "improvement": "specific improvement"
        }}

    ],

    "overall_strengths": [
        "strength 1",
        "strength 2"
    ],

    "overall_improvements": [
        "improvement 1",
        "improvement 2"
    ]
}}
"""


    # ======================================================
    # SEND TO OLLAMA
    # ======================================================

    try:

        response = requests.post(
            "http://localhost:11434/api/generate",

            json={
                "model": "llama3.2:3b",
                "prompt": prompt,
                "stream": False,
                "format": "json"
            },

            timeout=120
        )

        response.raise_for_status()


    except requests.exceptions.RequestException as error:

        return jsonify({
            "error": "Could not connect to Ollama.",
            "details": str(error)
        }), 500


    # ======================================================
    # PROCESS AI RESPONSE
    # ======================================================

    try:

        result_text = response.json()["response"]

        result = json.loads(result_text)

        return jsonify(result)


    except (KeyError, json.JSONDecodeError) as error:

        return jsonify({
            "error": "Ollama returned an invalid response.",
            "details": str(error)
        }), 500


# ==========================================================
# START SERVER
# ==========================================================

if __name__ == "__main__":

    app.run(
        debug=True
    )