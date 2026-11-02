export const startingPage = () => {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>API Server</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        background: #f5f5f5;
      }

      .container {
        text-align: center;
        padding: 40px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #22c55e;
        margin-bottom: 10px;
      }

      p {
        color: #666;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>🚀 Server is Running</h1>
      <p>Your API is up and running successfully.</p>
    </div>
  </body>
</html>
`;
};
