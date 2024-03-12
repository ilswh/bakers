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

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate HTML file.

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

### Python

I have used the recommended [PEP8 CI Python Linter](https://pep8ci.herokuapp.com) to validate all of my Python files.

| File | Screenshot | Notes |
| --- | --- | --- |
| bookmarks/ models.py | ![screenshot](src/documentation/bookmarksmodels.png) | Passed |
| bookmarks/ serializers.py | ![screenshot](src/documentation/bookmarksserializers.png) | Passed |
| bookmarks/ urls.py | ![screenshot](src/documentation/bookmarksurls.png) | Passed |
| bookmarks/ views.py | ![screenshot](src/documentation/bookmarksurls.png) | Passed |
| comments/ models.py | ![screenshot](src/documentation/commentsmodels.png) | Passed |
| comments/ serializers.py | ![screenshot](src/documentation/commentsserializers.png) | Passed |
| comments/ urls.py | ![screenshot](src/documentation/commentsurls.png) | Passed |
| comments/ views.py | ![screenshot](src/documentation/commentsviews.png) | Passed |
| contacts/ models.py | ![screenshot](src/documentation/contactsmodels.png) | Passed |
| contacts/ serializers.py | ![screenshot](src/documentation/contactsserializers.png) | Passed |
| contacts/ urls.py | ![screenshot](src/documentation/contactsurls.png) | Passed |
| contacts/ views.py | ![screenshot](src/documentation/contactsviews.png) | Passed |
| followers/ models.py | ![screenshot](src/documentation/followersmodels.png) | Passed |
| followers/ serializers.py | ![screenshot](src/documentation/followersserializers.png) | Passed |
| followers/ urls.py | ![screenshot](src/documentation/followersurls.png) | Passed |
| followers/ views.py | ![screenshot](src/documentation/followersviews.png) | Passed |
| likes/ models.py | ![screenshot](src/documentation/likesmodels.png) | Passed |
| likes/ serializers.py | ![screenshot](src/documentation/likesserializers.png) | Passed |
| likes/ urls.py | ![screenshot](src/documentation/likesurls.png) | Passed |
| likes/ views.py | ![screenshot](src/documentation/likesviews.png) | Passed |
| posts/ models.py | ![screenshot](src/documentation/postsmodels.png) | Passed |
| posts/ serializers.py | ![screenshot](src/documentation/postsserializers.png) | Passed |
| posts/ urls.py | ![screenshot](src/documentation/postsurls.png) | Passed |
| posts/ views.py | ![screenshot](src/documentation/postsviews.png) | Passed |
| profiles/ models.py | ![screenshot](src/documentation/profilesmodels.png) | Passed |
| profiles/ serializers.py | ![screenshot](src/documentation/profilesserializers.png) | Passed |
| profiles/ urls.py | ![screenshot](src/documentation/profilesurls.png) | Passed |
| profiles/ views.py | ![screenshot](src/documentation/profilesviews.png) | Passed |
| drfapi/ serializers.py | ![screenshot](src/documentation/drfapiserializers.png) | Passed |
| drfapi/ urls.py | ![screenshot](src/documentation/drfapiurls.png) | Passed |
| drfapi/ views.py | ![screenshot](src/documentation/drfapiviews.png) | Passed |
| drfapi/ permissions.py | ![screenshot](src/documentation/drfapipermissions.png) | Passed |
| drfapi/ settings.py | ![screenshot](src/documentation/drfapisettings.png) | Line to long, did not find a good place to cut in to two lines without breaking code |
| drfapi/ wsgi.py | ![screenshot](src/documentation/drfapiwsgi.png) | Passed |
| manage.py | ![screenshot](src/documentation/manage.png) | Passed |

## Browser Compatibility

I have tested the browser compatability in the three browsers below.

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Opera](https://www.opera.com/download)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Add post | Kitchen | Feed | Liked | Bookmarks | Contact Us | Sign In | Sign Up | Profile |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Opera |  ![screenshot](src/documentation/operaaddpost.png) | ![screenshot](src/documentation/operakitchen.png) | ![screenshot](src/documentation/operafeed.png) | ![screenshot](src/documentation/operaliked.png) | ![screenshot](src/documentation/operabookmarked.png) | ![screenshot](src/documentation/operacontactus.png) | ![screenshot](src/documentation/operasignin.png) | ![screenshot](src/documentation/signup.png) | ![screenshot](src/documentation/operaprofile.png) |
| Firefox |  ![screenshot](src/documentation/firefoxaddpost.png) | ![screenshot](src/documentation/firefoxkitchen.png) | ![screenshot](src/documentation/firefoxfeed.png) | ![screenshot](src/documentation/firefoxliked.png) | ![screenshot](src/documentation/firefoxbookmarked.png) | ![screenshot](src/documentation/firefoxcontactus.png) | ![screenshot](src/documentation/firefoxsignin.png) | ![screenshot](src/documentation/firefoxsignup.png) | ![screenshot](src/documentation/firefoxprofile.png) |
| Chrome |  ![screenshot](src/documentation/addpost.png) | ![screenshot](src/documentation/kitchen.png) | ![screenshot](src/documentation/feed.png) | ![screenshot](src/documentation/liked.png) | ![screenshot](src/documentation/bookmarked.png) | ![screenshot](src/documentation/contactus.png) | ![screenshot](src/documentation/signin.png) | ![screenshot](src/documentation/signup.png) | ![screenshot](src/documentation/profile.png) |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device |  Add post | Kitchen | Feed | Liked | Bookmarks | Contact Us | Sign In | Sign Up | Profile |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](src/documentation/mobileaddpost.png) | ![screenshot](src/documentation/mobilekitchen.png) | ![screenshot](src/documentation/mobilefeed.png) | ![screenshot](src/documentation/mobileliked.png) | ![screenshot](src/documentation/mobilebookmarked.png) | ![screenshot](src/documentation/mobilecontactus.png) | ![screenshot](src/documentation/mobilesignin.png) | ![screenshot](src/documentation/mobilesignup.png) | ![screenshot](src/documentation/mobileprofile.png) |
| Tablet (DevTools) |  ![screenshot](src/documentation/tabletaddpost.png) | ![screenshot](src/documentation/tabletkitchen.png) | ![screenshot](src/documentation/tabletfeed.png) | ![screenshot](src/documentation/tabletliked.png) | ![screenshot](src/documentation/tabletbookmarked.png) | ![screenshot](src/documentation/tabletcontactus.png) | ![screenshot](src/documentation/tabletsignin.png) | ![screenshot](src/documentation/tabletsignup.png) | ![screenshot](src/documentation/tabletprofile.png) |
| Desktop |  ![screenshot](src/documentation/addpost.png) | ![screenshot](src/documentation/kitchen.png) | ![screenshot](src/documentation/feed.png) | ![screenshot](src/documentation/liked.png) | ![screenshot](src/documentation/bookmarked.png) | ![screenshot](src/documentation/contactus.png) | ![screenshot](src/documentation/signin.png) | ![screenshot](src/documentation/signup.png) | ![screenshot](src/documentation/profile.png) |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Add post | ![screenshot](src/documentation/lhmaddpost.png) | ![screenshot](src/documentation/lhdaddpost.png) |
| Kitchen | ![screenshot](src/documentation/lhmkitchen.png) | ![screenshot](src/documentation/lhdkitchen.png) |
|  Feed | ![screenshot](src/documentation/lhmfeed.png) | ![screenshot](src/documentation/lhdfeed.png) |
| Liked | ![screenshot](src/documentation/lhmliked.png) | ![screenshot](src/documentation/lhmliked.png) |
| Bookmarks | ![screenshot](src/documentation/lhmbookmarked.png) | ![screenshot](src/documentation/lhdbookmarked.png) |
| Contact Us | ![screenshot](src/documentation/lhmcontactus.png) | ![screenshot](src/documentation/lhdcontactus.png) |
| Sign In | ![screenshot](src/documentation/lhmsignin.png) | ![screenshot](src/documentation/lhdsignin.png) |
| Sign Up | ![screenshot](src/documentation/lmhsignup.png) | ![screenshot](src/documentation/lhdsignup.png) |
| Profile | ![screenshot](src/documentation/lhmprofile.png) | ![screenshot](src/documentation/lhdprofile.png) |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Add post | | | | | |
| | Feature is expected to add post. | Tested the feature by filling in information and submitting. | The feature behaved as expected, and it did add the post | Test concluded and passed | ![screenshot](src/documentation/addpost.png)![screenshot](src/documentation/kitchen.png) |
| | Feature is expected to not except post when the picture or title is too big. | Tested the feature by filling in information with a too big picture & title. | The feature behaved as expected, and it did not accept the post | Test concluded and passed | ![screenshot](src/documentation/addpostfail.png) |
| Kitchen | | | | | |
| | Feature is expected to show all posts in an infinity scroll. | Tested the feature by going to kitchen and scrolling. | The feature behaved as expected, and infinity scrolled | Test concluded and passed | ![screenshot](src/documentation/kitchen.png) |
| Feed | | | | | |
| | Feature is expected to show posts of users I follow. | Tested the feature by going to feed and going through feed. | The feature behaved as expected, and showed posts of only people I follow | Test concluded and passed | ![screenshot](src/documentation/feed.png) |
| Liked | | | | | |
| | Feature is expected to show all post I've like. | Tested the feature by clicking on the heart in the navbar and looking at all posts there if I liked them. | The feature behaved as expected, and showed only posts I had liked | Test concluded and passed | ![screenshot](src/documentation/liked.png) |
| | Feature is expected to add a number next to the heart icon when I click like. | Tested the feature by clicking on the heart under a post and seeing if the number added up. | The feature behaved as expected, and the number added up | Test concluded and passed | ![screenshot](src/documentation/like.png) |
| | Feature is expected to subtract a number next to the heart icon when I click unlike after having liked. | Tested the feature by clicking on the heart and seeing if the number subtracted. | The feature behaved as expected, and the number subtracted | Test concluded and passed | ![screenshot](src/documentation/unlike.png) |
| Bookmarked | | | | | |
| | Feature is expected to show all post I've bookmarked. | Tested the feature by clicking on the bookmark in the navbar and looking at all posts there if I bookmarked them. | The feature behaved as expected, and showed only posts I had bookmarked | Test concluded and passed | ![screenshot](src/documentation/liked.png) |
| | Feature is expected to add a number next to the bookmark icon when I click like. | Tested the feature by clicking on the bookmark under a post and seeing if the number added up. | The feature behaved as expected, and the number added up | Test concluded and passed | ![screenshot](src/documentation/like.png) |
| | Feature is expected to subtract a number next to the bookmark icon when I click unlike after having liked. | Tested the feature by clicking on the bookmark and seeing if the number subtracted. | The feature behaved as expected, and the number subtracted | Test concluded and passed | ![screenshot](src/documentation/unlike.png) |
| Contact | | | | | |
| | Feature is expected to take user to a form to fill in information. | Tested the feature by clicking. | The feature behaved as expected and redirected me to a contactform | Test concluded and passed | ![screenshot](src/documentation/contactus.png) |
| Profile | | | | | |
| | Feature is expected to redirect me to my profile when clicking on my avatar in the navbar and show all my posts and how many I follow and how many folllowers I have. | Tested the feature by clicking on my avatar in the navbar. | The feature behaved as expected, and it did open my profile page | Test concluded and passed | ![screenshot](src/documentation/profile.png) |
| | Feature is expected to redirect me to the other users profile when clicking on their avatar and show all their posts and how many I follow and how many folllowers I have. | Tested the feature by clicking on another users avatar. | The feature behaved as expected, and it did open the other user profile page | Test concluded and passed | ![screenshot](src/documentation/profile.png) |
| Sign out | | | | | |
| | Feature is expected to sign out and redirect me to th kitchen when I click on sign out in the navbar. | Tested the feature by clicking on sign out. | The feature behaved as expected, and it did redirect me to the kitchen, signed out. | Test concluded and passed | ![screenshot](src/documentation/kitchen.png) |
| Sign in | | | | | |
| | Feature is expected to sign in and redirect me to the kitchen when I fill in my information in the sign in form and click on sign in. | Tested the filling in information in the sign in form  and clicking the sign in button. | The feature behaved as expected, and it did redirect me to the kitchen, signed in. | Test concluded and passed | ![screenshot](src/documentation/kitchen.png) |
| | Feature is expected to redirect me to the sign up when I click on the orange yellow text sign up. | Tested the feature by clicking on sign up. | The feature behaved as expected, and it did redirect me to the sign up. | Test concluded and passed | ![screenshot](src/documentation/signup.png) |
| Sign up | | | | | |
| | Feature is expected to sign me up and redirect me to sign in when I fill in my information in the sign up form. | Tested the filling in information in the sign up form and clicking the submit button. | The feature behaved as expected, and it did redirect me to .. | Test concluded and passed | ![screenshot](src/documentation/signin.png) |
| | Feature is expected to redirect me to the sign in when I click on the orange yellow text sign in. | Tested the feature by clicking on sign in. | The feature behaved as expected, and it did redirect me to the sign in. | Test concluded and passed | ![screenshot](src/documentation/signin.png) |
| | Feature is expected to say no when I try to use a to easy password, to common or to short and use a username already in use. | Tested the feature by writing a simple password of only 6 signs and a username already in use. | The feature behaved as expected, and it did redirect me to the sign in. | Test concluded and passed | ![screenshot](src/documentation/signupfail.png) |


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
| As a returning site user, I would like to view other users profile, so that I can see how many they follow and are following and how many and what posts they have made. | ![screenshot](src/documentation/profile.png) |
| As a returning site user, I would like to unfollow a user, so that I can stop seeing them on my feed. | ![screenshot](src/documentation/follow-unfollow.png) |
| As a returning site user, I would like to view my profile, so that I can see how many I follow and are following and how many and what posts I have made. | ![screenshot](src/documentation/profile.png) |
| As a returning site user, I would like to be able to edit my profile, so that I can keep it updated as I change.  | ![screenshot](src/documentation/editprofile.png) |
| As a returning site user, I would like to be able to edit my bakerusername, so that I can keep it updated as I change.  | ![screenshot](src/documentation/editbakername.png) |
| As a returning site user, I would like to be able to edit my password, so that I be safe. | ![screenshot](src/documentation/editpassword.png) |
| As a site administrator, I should be able to delete a user, so that I can keep a happy healthyh community. | ![screenshot](src/documentation/admin.png) |



## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

## Bugs

### Frontend

-  The colors of the buttons on the contact form did not apply themselves.

    ![screenshot](src/documentation/bugbright.png)

    - To fix this, I looked in files which had buttons where the colors were applied and saw that the .Bright (screenshot) was not being used, so I applied it on the buttons under the contact form.

-  The bookmark icon did not show under any post.

    ![screenshot](src/documentation/bugbookmark.png)

    - To fix this, I realized I had not added any of my bookmarks(screenshot: terminal error message) I had not added the bookmarks in the cardbody, so I added them there.

### Backend

-  The avatar in the navbar did not work.

    ![screenshot](src/documentation/bugavatar1.png)
    ![screenshot](src/documentation/bugavatar2.png)
    ![screenshot](src/documentation/bugavatarfix.png)

    - To fix this, I added default_profile into the main folder as a new and changed the last letters/number in the links in my backend space.

-  The drf api did not want to open from herokus open app button.

    ![screenshot](src/documentation/bugdisallowedhost.png)

    - I added the url under allowed_hosts in settings.py.

### GitHub **Issues**

https://github.com/ilswh/bakers/issues

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/ilswh/poetic-society/issues).

## Unfixed Bugs

There are no remaining bugs that I am aware of.