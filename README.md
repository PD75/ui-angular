# uiAngular
My _ KISS _ -  semantic-ui/angularJS library

## Status

This is WIP, and only modules I have needed are included; but contribution are welcome.

Please put an issue if you intend to contribute your work, then I will put some effort to write the rules and guidlines etc.

No build tools at present but will come as I progress.

## Approach

Designed around KISS Principle _Keep it simple, stupid_

- Reuse _semantic-ui_ js code as much as possible: __Why reinvent the wheel__
- Accept __all__ parameters that _semantic-ui_ does, as an object (don't clutter html, use controller and services)
- _semantic-ui_ syntax looks good with angular, no need to have directive to add html classes unless really nessesary or simpifies significantly
- If there is no _semantic-ui_ js code, there needs to be a real benefit to write angular code (see point above)