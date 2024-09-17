<script>
    let content = '';
    let responseId = '';

    async function handleSubmit() {
        const response = await fetch(import.meta.env.VITE_BE_HOST + '/api/mocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        });

        if (response.ok) {
            const data = await response.json(); // Parse the response as JSON
            responseId = data.id; // Extract the ID from the response
            console.log('Content submitted successfully');
            console.log(responseId); // Log the response ID
        } else {
            console.error('Error submitting content');
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="content">Content:</label>
    <textarea id="content" bind:value={content} rows="10" cols="50"></textarea>
    <button type="submit">Create</button>
</form>

<!-- Display the response ID after submission -->
{#if responseId}
    <section class="response-id-section">
        <div class="highlight-id">{import.meta.env.VITE_BE_HOST + "/api/mocks/" + responseId}</div>
    </section>
{/if}

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    label {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 1.2em;
        color: #333;
    }

    textarea {
        padding: 10px;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
        min-height: 200px;
        margin-bottom: 20px;
    }

    button {
        padding: 10px 15px;
        font-size: 1.1em;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }

    button:active {
        background-color: #004491;
    }

    .response-id-section {
        margin-top: 30px;
        padding: 15px;
        border: 2px solid #4CAF50;
        border-radius: 8px;
        background-color: #e8f5e9;
        text-align: center;
    }

    .response-id-section p {
        font-size: 1.2em;
        font-weight: bold;
        color: #4CAF50;
        margin-bottom: 10px;
    }

    .highlight-id {
        font-size: 1.5em;
        color: #333;
        background-color: #fff;
        border: 2px solid #4CAF50;
        border-radius: 5px;
        padding: 10px;
        display: inline-block;
        font-weight: bold;
    }
</style>