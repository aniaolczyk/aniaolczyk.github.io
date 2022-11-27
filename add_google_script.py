def main():
    google_script = ""
    content = ""
    with open("google_pages.txt", "r") as f:
        google_script = f.read()
    with open("index.html", "r") as f:
        content = f.read()
    with open("index.html", "w") as f:
        f.write(content[:27] + " ".join(google_script.split()) + content[27:])


main()