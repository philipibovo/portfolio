rm -rf dist/navonajs
rm -rf dist/pompeijs
rm -rf dist/tivolijs

ng build --configuration=production --aot=true --build-optimizer=true --project portfolio

cp -r robots.txt dist/robots.txt

mkdir dist/navonajs
cp -r ../navonajs/* dist/navonajs
#chown -R philipibovo: /Users/philipibovo/Development/philipi/portfolio/dist/navonajs

mkdir dist/pompeijs
cp -r ../pompeijs/* dist/pompeijs
#chown -R philipibovo: /Users/philipibovo/Development/philipi/portfolio/dist/pompeijs

mkdir dist/tivolijs
cp -r ../tivolijs/* dist/tivolijs
#chown -R philipibovo: /Users/philipibovo/Development/philipi/portfolio/dist/tivolijs

#firebase deploy
