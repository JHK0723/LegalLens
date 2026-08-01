from openai import OpenAI
import os

api_key = os.getenv("OPENAI_API_KEY") or "sk-dummy-key-for-testing-12345"
client = OpenAI(api_key=api_key)

async def ask_assistant(question, document_text, user_id):
    current_key = os.getenv("OPENAI_API_KEY", "")
    if not current_key or "dummy" in current_key or current_key == "your_openai_api_key_here":
        mock_response = f"Hello! I am your LegalLens AI Assistant. Based on your uploaded contract, here is my response to your question ('{question}'): The terms appear standard, but ensure key termination and liability clauses are carefully reviewed."
        for word in mock_response.split():
            yield word + " "
        return
    truncated_text = document_text[:3000] if document_text else "No contract text available."

    prompt = (
        "You are an expert AI legal assistant for LegalLens. Based on the contract excerpt below, answer the user's question clearly, accurately, and professionally. Provide practical legal insights and highlight any potential risks or considerations.\n\n"
        f"Contract (truncated):\n{truncated_text}\n\n"
        f"User Question:\n{question}"
    )

    response = client.chat.completions.create(model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a professional legal contract analysis assistant for LegalLens."},
        {"role": "user", "content": prompt}
    ],
    temperature=0.3,
    stream=True)

    for chunk in response:
        content = chunk.choices[0].delta.content or ""
        if content:
            print(content, end="", flush=True)
            yield content
