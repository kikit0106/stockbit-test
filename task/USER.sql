select u.ID, u.UserName, p.UserName AS ParentUserName
from USER u
left join USER p on p.ID = u.Parent
ORDER by u.ID;