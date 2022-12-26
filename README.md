# Genuary 2023

This is my repository for [Genuary 2023](https://genuary.art).

I'm not sure how I'm gonna order the code here, so for now I'm keeping stuff simple.

- `examples`: stores useful code that I may use repeatedly.
- `challenge`: stores the scripts of each day.
- `libraries`: stores utility libraries.

Useful commands:

To setup a server (and thus work with local files):
```bash
python3 -m http.server
```
**Note**: using python as backend slows the framerate considerably.

To make a video from the outputs:
```bash
ffmpeg -r 35 -i "%07d.png" -pix_fmt yuv420p -movflags +faststart video.mp4
```

To loop said video:
```bash
ffmpeg -stream_loop 3 -i video.mp4 -c copy videolooped.mp4
```

---

To dos:

- [ ] `npm init` this stuff. I should probably add a `vite` pipeline too.

---

Feel free to ask any questions, make a suggestion or even copy my code.
