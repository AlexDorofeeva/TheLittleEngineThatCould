
‼️If 10 members push to main at the same time, it will cause merge conflicts and overwrite each other’s work. Instead, each member should create their own branch!

1️⃣ Clone the Repository (First Time)

             git clone https://github.com/AlexDorofeeva/TheLittleEngineThatCould.git
             cd "js-homework-team"
             git pull  ‼️ Always pull the latest updates
2️⃣ Create a New Branch for Each Team Member

git checkout -b team-member-name
🔹 Example:  git checkout -b Alex


3️⃣ Solve the Homework

Add your JavaScript file to the homework5 folder.
🔹 Example: alex.js
4️⃣ Commit & Push the Branch

            git add .
            git commit -m "Added solution by Alex"
            git push origin team-member-name
🔹 Example: git push origin Alex
‼️ Each team member pushes their own branch, not main!

🔄 Steps for the Teams: Merge to Main
1️⃣ Pull All Team Member Branches

           git checkout main
           git fetch --all
           
           git pull origin main
2️⃣ Merge your  Branch 

git merge team-member-name
🔹 Example: git merge Alex

‼️ Resolve any merge conflicts if necessary, do not use automatically resolve conflict!

3️⃣ Push the Final Merged Code to main

           git push origin main

✅ Team Members: Work on separate branches, not main.
✅ Team Leader: Pull & merge all branches into main.
✅ Avoid Merge Conflicts: Don’t push directly to main!

Now, all 10 members can work without conflicts.
