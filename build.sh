
rm -r ../build/
npm run build
gh-pages -d build
/opt/homebrew/bin/python3 add_google_script.py
cp -r build/ ../build
echo "Successfully built website."
echo "execute:
gc master
cp -r ../build build/
and push to deploy new code."
