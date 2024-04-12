import * as MailComposer from 'expo-mail-composer';

export async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
    // Create email link query
    try {
        const result = await MailComposer.composeAsync({
            subject: subject,
            recipients: [to],
            body: body,
            isHTML: true,
            cc: cc,
            bcc: bcc,
            // checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        });

        return result;
    } catch (error) {
        console.error('Error composing email:', error);
        // Handle the error as needed
    }
}