// This asyncHandler function is a wrapper (higher-order function) that prevents your Express app from crashing due to unhandled promise rejections. It automatically catches any errors thrown by asynchronous route handlers and passes them to Express's built-in error handling middleware.

const asyncHandler= (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler};