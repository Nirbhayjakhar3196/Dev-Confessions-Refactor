# Pre-Refactor Audit

## File Structure Issues

1. `app.js` contains server setup, route definitions, business logic, and response handling in a single file.
2. No separation of concerns between routing, controller logic, and reusable services.
3. Entire application logic is difficult to navigate because everything is inside one file.

## Variable Naming Issues

4. Variables like `d`, `x`, `arr`, `res2`, and `tempX` do not describe their purpose.
5. Single-letter variable names increase confusion and slow debugging.

## Function Responsibility Issues

6. `handleAll()` performs multiple responsibilities in one function.
7. The same function appears to validate input, transform data, handle storage, and prepare responses.
8. Large monolithic functions are difficult to test and maintain.

## Hardcoded Config Issues

9. API URLs are hardcoded in multiple places instead of using environment variables.
10. Port number is hardcoded instead of reading from `process.env.PORT`.

## Maintainability Issues

11. Repeated values create duplication and increase update effort.
12. Nested logic reduces readability.
13. Debugging failures will take longer because responsibilities are mixed together.

## Documentation Issues

14. No inline comments explaining non-obvious logic.
15. No documentation showing refactor decisions or naming reasons.

## Testing / Risk Areas

16. Renaming unclear variables without care may break behavior.
17. Splitting `handleAll()` incorrectly may change API responses.
18. Refactor must preserve all existing routes and outputs.