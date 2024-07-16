---
title: "Raycast: Second Impressions"
date: "15-07-2024"
---

When I first bought a MacBook, I came across Alfred: an app launcher to replace Apple's Spotlight. What I liked the most was:

- Opening apps with just a keystroke (e.g.: "s" opened Spotify)
- Looking stuff up online and searching files on my computer
- Searching all of my bookmarks and opening them

I first heard of Raycast in November 2022. I was curious, but skeptical. I downloaded it and tried it out. The product felt a bit undercooked:

- It opened up files when I wanted to open browser bookmarks
- File search felt slower and less assertive than Alfred

Even if my first experience with Raycast wasn't convincing, I definitely saw the potential. It felt slick and modern. It just didn't fit my use case.

Disclaimer: I didn't take the time to configure Raycast as I had done with Alfred. In that sense, it was a bit unfair to expect Raycast's default to behave as I desired.

Still, out-of-the-box (OOTB) behavior plays a huge role on migrating to/from a similar tool. Most users won't have the patience to config the new tool and, therefore, won't migrate.

On June 2024, I decided to give Raycast a second try. Spoiler: I no longer use Alfred. In this article I will explain why I came back, what I love and what I wish would change.

## Why I tried it again

Ultimately, what brought me back was [@peduarte](https://x.com/peduarte), a Software Engineer at Raycast, asking me in an [X thread](https://x.com/peduarte/status/1793990811014865072) what I thought Alfred did better.

After reading through some of my feedback, he invited me to join the Slack and be a beta-tester.

This shows how Raycast excels at Community, which is vital for Developer Tools.

## What I love

### Uninstalling other apps to use Raycast instead

Uninstalling apps feels incredible. So far I have chopped off these in favor of the Raycast alternatives:

- [Maccy](https://maccy.app/) for clipboard history
- [Rocket](https://matthewpalmer.net/rocket/) for typing emojis
- [Rectangle](https://rectangleapp.com/) for window management

I get good UX and more storage on my MacBook: it's a win-win!

### Extensions

This is the soul of Raycast. Here is what I use the most:

- [Spotify Controls](https://www.raycast.com/thomas/spotify-controls): I use "sp" to Play/Pause and "sa" and "sd" for the Next/Previous Track. These are better than the MacOS native because they don't conflict with other players (such as pausing a Youtube video by accident instead of a Spotify track)

- [Google Chrome](https://www.raycast.com/Codely/google-chrome): one feature makes this extension for me: Search Tabs. Even if Chrome is minimized, I can access specific tabs in seconds. A common usecase is to go from VS Code straight into ChatGPT. Or from anywhere to WhatsApp.

- [Google Translate](https://www.raycast.com/gebeto/translate): I'm currently travelling around Europe and the possibility of translating a sentence from/into 4 languages in seconds is unbelievably handy.


## What I wish would change

### Snippets

I have been using the iOS + MacOS Text Replacements since forever. What I use it for the most is my contact information, for example: "myemail" replaces into "lukeberrypi@gmail.com".

I had these setup for my telephone number, social security number, and much more. I was excited to migrate these into Raycast, only to see that they didn't work as expected. They break on X and WhatsApp, two of my most used websites. They also don't work on VS Code.

Raycast Snippets are better than native Text Replacements for two reasons:

- they have an option

### Browser Bookmarks

Alfred managed to have "browser agnostic" bookmarks. This means that, regardless of where I had originally saved a bookmark, it would always open in my current default browser.

For example, if I went to Safari and bookmarked "google.com" and accessed that via Alfred, it would open "google.com" on Chrome (which is my default browser). In Raycast it would open in Safari.

### Escape

In Raycast, "Esc" goes back
