@echo off

REM Copy the build files to the destination
xcopy "out\*" "C:/Users/user/OneDrive/Bureau/Mes projets/.github.io-react-portfolio/" /s /e

REM Change directory to the destination
cd "C:/Users/user/OneDrive/Bureau/Mes projets/.github.io-react-portfolio/"

REM Add changes to git
git add .

REM Commit the changes
git commit -m "some changes"

REM Push the changes to the repository
git push