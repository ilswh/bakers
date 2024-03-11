# Testing

Return back to the [README.md](README.md) file.

All features of Bakers have been tested through:
- Code validation of HTML, CSS & Python
- Browser compatability in Chrome, Firefox & Opera
- Responsiveness on mobile, tablet and desktop
- Lighthouse
- Defensive programming
-  User stories

## Code Validation

All files in Bakers have been validated through HTML, CSS and Python validators.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| index.html | [Click](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbakers-d9795fbf4027.herokuapp.com%2F) | ![screenshot](src/documentation/indexhtml.png) | Document checking completed. No errors or warnings to show. |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| App.module.css | ![screenshot](src/documentation/appcss.png) | Passed with warnings |
| Asset.module.css & | ![screenshot](src/documentation/assetcss.png) | Passed |
| Avatar.module.css & | ![screenshot](src/documentation/avatarcss.png) | Passed |
| Button.module.css | ![screenshot](src/documentation/buttoncss.png) | Passed |
| Comment.module.css & | ![screenshot](src/documentation/commentcss.png) | Passed |
| CommentCreateEdit.module.css & | ![screenshot](src/documentation/commentcreateeditcss.png) | Passed |
| MoreDropdown.module.css & | ![screenshot](src/documentation/moredropdowncss.png) | Passed |
| NavBar.module.css & | ![screenshot](src/documentation/navbarcss.png) | Passed |
| NotFound.module.css & | ![screenshot](src/documentation/notfoundcss.png) | Passed |
| Post.module.css & | ![screenshot](src/documentation/postcss.png) | Passed |
| PostCreateEdit.module.css & | ![screenshot](src/documentation/postcreateeditcss.png) | Passed |
| PostsPage.module.css & | ![screenshot](src/documentation/postspagecss.png) | Passed |
| Profile.module.css & | ![screenshot](src/documentation/profilecss.png) | Passed |
| ProfilePage.module.css & | ![screenshot](src/documentation/profilepagecss.png) | Passed |
| SignInUpForm.css & | ![screenshot](src/documentation/signinupformcss.png) | Passed |


### JavaScript

I have used the recommended [JSHint](hhttps://jshint.com/) to validate all of my Javascripy files.

| File | JS URL | Screenshot | Notes |
| --- | --- | --- | --- |


### Python

I have used the recommended [PEP8 CI Python Linter](https://pep8ci.herokuapp.com) to validate all of my Python files.

| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |

## Browser Compatibility

I have tested the browser compatability in the three browsers below.

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Opera](https://www.opera.com/download)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Add post | Kitchen | Feed | Liked | Bookmarks | Contact Us | Sign out | Sign In | Sign Up | Profile |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chrome | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Firefox |  --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Opera | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device |  Add post | Kitchen | Feed | Liked | Bookmarks | Contact Us | Sign out | Sign In | Sign Up | Profile |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tablet (DevTools) | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop |  --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Add post | --- | --- | --- |
| Kitchen | --- | --- | --- |
|  Feed | --- | --- | --- |
| Liked | --- | --- | --- |
| Bookmarks | --- | --- | --- |
| Contact Us | --- | --- | --- |
| Sign out | --- | --- | --- |
| Sign In | --- | --- | --- |
| Sign Up | --- | --- | --- |
| Profile |  --- | --- | --- |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Add post | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Kitchen | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Feed | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Liked | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Bookmarked | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Contact | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Profile | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Sign out | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Sign in | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |
| Sign up | | | | | |
| | Feature is expected to __. | Tested the feature by __. | The feature behaved as expected, and it did open the clicked poem | Test concluded and passed | ![screenshot](documentation/home.png)![screenshot](documentation/viewpoem-success.png) |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to see all posts on the homepage, so that I can decide if I want to sign up. | ![screenshot](src/documentation/kitchen.png) |
| As a new site user, I would like to sign up, so that I can join the bakers community. | ![screenshot](src/documentation/signup.png) |
| As a returning site user, I would like to see all posts on the homepage, so that I can see what bakers community is sharing. | ![screenshot](src/documentation/kitchen.png) |
| As a returning site user, I would like to sign in, so that I can do everything availible on bakers. | ![screenshot](src/documentation/signin.png) |
| As a returning site user, I would like to sign out, so that I can keep my account private and safe. | ![screenshot](src/documentation/signout.png) |
| As a returning site user, I would like to add a post, so that I can share my baked news. | ![screenshot](src/documentation/addpost.png) |
| As a returning site user, I would like to edit a post, so that I can fix mistakes I made. | ![screenshot](src/documentation/editpost.png) |
| As a returning site user, I would like to delete a post, so that I can change my mind about posting. | ![screenshot](src/documentation/deletepost.png) |
| As a returning site user, I would like to like a post, so that I can show my appreciation. | ![screenshot](src/documentation/like.png) |
| As a returning site user, I would like to unlike a post, so that I can change my mind about liking. | ![screenshot](src/documentation/unlike.png) |
| As a returning site user, I would like to bookmark a post, so that I can go back to a post easily. | ![screenshot](src/documentation/bookmark.png) |
| As a returning site user, I would like to unbookmark a post, so that I can change my mind about a bookmark. | ![screenshot](src/documentation/unbookmark.png) |
| As a returning site user, I would like to comment on posts, so that I can share my thought and opinions. | ![screenshot](src/documentation/comment.png) |
| As a returning site user, I would like to edit a comment, so that I can fix mistakes I made. | ![screenshot](src/documentation/editcomment.png) |
| As a returning site user, I would like to delete a commment, so that I can change my mind about a comment I wrote. | ![screenshot](src/documentation/deletecomment.png) |
| As a returning site user, I would like to follow a user, so that I can see their posts frequently on feed. | ![screenshot](src/documentation/follow-unfollow.png) |
| As a returning site user, I would like to unfollow a user, so that I can stop seeing them on my feed. | ![screenshot](src/documentation/follow-unfollow.png) |
| As a returning site user, I would like to view my profile, so that I can see how many I follow and are following and how many and what posts I have made. | ![screenshot](src/documentation/profile.png) |
| As a returning site user, I would like to view other users profile, so that I can see how many they follow and are following and how many and what posts they have made. | ![screenshot](src/documentation/profile.png) |
| As a site administrator, I should be able to delete a user, so that I can keep a happy healtyh community. | ![screenshot](src/documentation/admin.png) |



## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

#### Unit Test Issues

## Bugs

-  `'include'` when __.

    ![screenshot](documentation/bug-1.png)

    - To fix this, __.

      ![screenshot](documentation/bug-1-fix.png)


### GitHub **Issues**

https://github.com/ilswh/bakers/issues

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](..).

| Bug | Status |
| --- | --- |
| [`include is not defined` when __.](https://github.com/ilswh/poetic-society/issues/11) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/ilswh/poetic-society/issues).

| Bug | Status |
| --- | --- |
| [register.html valdidation failed](https://github.com/ilswh/poetic-society/issues/14) | Open |

## Unfixed Bugs

- Parse error.

    ![screenshot](documentation/css-validation.png)

    - I have not yet attempted to fix this.

There are no remaining bugs that I am aware of.