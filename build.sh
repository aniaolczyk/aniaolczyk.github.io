
rm -r ../build/
npm run build
gh-pages -d build
/opt/homebrew/bin/python3 add_google_script.py
cp -r build/ ../build
git add .
git commit -m "$1"
git push
gc master
cp -r ../build .
git add .
git commit -m "$1"
git push
echo "Successfully built website."
echo "execute:
gc master
cp -r ../build/* .
and push to deploy new code."
