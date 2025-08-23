export default defineEventHandler(async (event) => {
    try {
        // API
        const body = await readBody(event);
        const config = useRuntimeConfig();

// Check for email
        if (!body.email) {
            throw createError({
                statusCode: 400,
                message: "Email is required",
            });
        }
// Make request to Kit
        const res: any = await $fetch('https://api.kit.com/v3/forms/8464855/subscribe', {
            method: 'POST',
            body: {
                api_key: config.public.kitKey,
                email: body.email,
                first_name: body.firstName,
            },
        });

// Check if already subscirbed
        if (res.subscription.state === 'active') {
            return {
                message: 'You are already subscribed!',
            };
        }
// Return success message
        return {
            message: 'You are now subscribed! Check your email to confirm.',
        };
    }
    catch {
        // Handle network errors
        throw createError({
            statusCode: 500,
            statusMessage: "Something went wrong",
        })
    }

});