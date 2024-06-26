# Resend Cold Emailer

This project is a simple client for sending emails through the Resend.com API. It's built with React and uses Axios for API calls, Yup for form validation, and Day.js for date and time formatting.

# screenshot

![resend-emailer-screenshot](https://github.com/neontomo/resend-cold-emailer/assets/105588693/5010862d-ce0b-4945-b488-6884b3a934b4)

## Features

- Send emails using the Resend.com API
- Great for cold email outreach
- Load a long batch of emails by comma-separation
- Support for variables in messages (e.g. `{fromName}`, `{toName}`, `{fromEmail}`, `{toEmail}`, `{currentDate}`, `{currentTime}`)
- Form validation using Yup - removes invalid emails!
- Alerts for successful emails / errors
- Instant preview of the rendered email
- Support for using temporary API key in browser or save it in `.env`

## Installation

1. Clone the repository:

```bash
git clone https://github.com/neontomo/resend-cold-emailer.git
```

2. Navigate to the project directory:

```bash
cd resend-cold-emailer
```

3. Install the dependencies with your package manager of choice:

```bash
yarn install # yarn
npm install # or with npm
pnpm install # or with pnpm
```

4. Generate an API key from Resend.com and set up your custom domain DNS records:

- https://resend.com/api-keys
- https://resend.com/domains

5. Rename the `.env.example` file to `.env` in the project root, and modify it to include your Resend API key:

```bash
RESEND_API_KEY="your-api-goes-key-here"
```

6. Edit your default email templates in the `.env` file, or make them blank:

```bash
NEXT_PUBLIC_RESEND_FROM_NAME="Tomo"
NEXT_PUBLIC_RESEND_FROM_EMAIL="tomo@email.neontomo.com"
NEXT_PUBLIC_RESEND_SUBJECT="Can I help you get more customers?"
NEXT_PUBLIC_RESEND_MESSAGE="Hi, {toName}!\n\nI hope you're doing well. I'm {fromName}, and I help businesses like yours get more customers.\n\nI'd love to learn more about your business and see if I can help you grow.\n\nDo you have time for a quick chat this week?\n\nKind regards,\n{fromName}"
```

7. Start the development server:

```bash
yarn dev # yarn
npm run dev # or with npm
pnpm dev # or with pnpm
```

8. Open your browser and navigate to http://localhost:3000.

## Usage

1. Fill out the form with the recipient's name, email address, your name and email address, a subject line and message.
2. Click the "Send Email" button.
3. If the email is sent successfully, you will see a success alert.
4. If there is an error, you will see an error alert.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
