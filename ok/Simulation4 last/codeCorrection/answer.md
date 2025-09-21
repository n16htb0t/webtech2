First issue name of list in data.js is users but while importing in UserList.js its user, also This is a named export, not a default export therefore should be wrapped in {} braces while imported in UserList.js.

```data.js
export const users=
```

```  conflict code app.js
import user from "./data";
```

and users should be in {}

import {users} from "./data"
______________________________________________________

Issue #2 In JSX, JavaScript expressions must be wrapped in curly braces {}.

user.id and user.profession should be in braces {} to make it work as javascript experession

<li key={user.id}>	
<p>Profession: {user.profession}</p>


------------------------------------------

Issue #3 Function and export names in Userlist are case sensitive therefore should be exported same 

In UserList.js:


```wrong
export default userList
```

```right
export default UserList
```
----------------------------------------------------

Issue #4 :
The import name must exactly match the exported identifier, including case.

Incorrect in App.js:

```
import {Userlist} from "./UserList"
```
-------------------------------------------------