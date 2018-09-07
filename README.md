Mysql Db Config<br>
/helper/db.js
  
LIVE DEMO
<br>
<a href="https://nodejs-express-mysql-crud.herokuapp.com/api" title="Open Application" target="_blank" >https://nodejs-express-mysql-crud.herokuapp.com/api</a>



<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Users</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/users</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>List all users.</td>
</tr>
<tr>
<td>/api/users</td>
<td><code>POST</code></td>
<td>{ usersFirstName: 'Mehmet Mutlu', usersLastName:'Elmas', authorizationsId:required }</td>
<td>Create a new users.</td>
</tr>
<tr>
<td>/api/users/:usersId</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Get a users.</td>
</tr>
<tr>
<td>/api/users/update/:usersId</td>
<td><code>PUT</code></td>
<td>{ usersFirstName: 'Mehmet Mutlu', usersLastName:'Elmas', authorizationsId:required }</td>
<td>Update a users with new info.</td>
</tr>
<tr>
<td>/api/users/delete/:usersId</td>
<td><code>POST</code></td>
<td>Empty</td>
<td>Delete a users.</td>
</tr>
</tbody></table>
