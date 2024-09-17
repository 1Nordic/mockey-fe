<script>
    let content = '';
    let responseId = '';
    let contentType = 'application/json';

    async function handleSubmit() {
        const response = await fetch(import.meta.env.VITE_BE_HOST + '/api/mocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content, type: contentType})
        });

        if (response.ok) {
            const data = await response.json();
            responseId = data.id;
        } else {
            console.error('Error submitting content');
        }
    }

    function handleNew() {
        content = '';
        document.getElementById('content').focus();
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="content">Content:</label>
    <textarea id="content" bind:value={content} rows="10" cols="50"></textarea>

    <label for="contentType">Content Type:</label>
    <select id="contentType" bind:value={contentType}>
        <option value="text/plain">Text</option>
        <option value="application/json">JSON</option>
    </select>

    <div style="margin-top: 10px;">
        <button type="submit">Create</button>
        <button type="button" on:click={handleNew}>New</button>
    </div>
</form>

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

    select {
        padding: 10px;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
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
