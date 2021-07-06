rm -rf dist/navonajs
rm -rf dist/pompeijs
rm -rf dist/tivolijs

ng build --configuration=production --aot=true --build-optimizer=true --project portfolio

chown -R philipi: /home/philipi/Desenvolvimento/philipi/portfolio/dist

mkdir dist/navonajs
cp -r ../navonajs/* dist/navonajs
chown -R philipi: /home/philipi/Desenvolvimento/philipi/portfolio/dist/navonajs

mkdir dist/pompeijs
cp -r ../pompeijs/* dist/pompeijs
chown -R philipi: /home/philipi/Desenvolvimento/philipi/portfolio/dist/pompeijs

mkdir dist/tivolijs
cp -r ../tivolijs/* dist/tivolijs
chown -R philipi: /home/philipi/Desenvolvimento/philipi/portfolio/dist/tivolijs





# firebase deploy
