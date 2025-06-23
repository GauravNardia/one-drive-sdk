# Me

## Drive

### Root

Methods:

- <code title="get /me/drive/root/children">client.me.drive.root.<a href="./src/resources/me/drive/root.ts">listChildren</a>() -> void</code>

### Items

Methods:

- <code title="post /me/drive/items/{parent-id}/children">client.me.drive.items.<a href="./src/resources/me/drive/items.ts">create</a>(parentID, { ...params }) -> void</code>
- <code title="get /me/drive/items/{item-id}">client.me.drive.items.<a href="./src/resources/me/drive/items.ts">retrieve</a>(itemID) -> void</code>
- <code title="patch /me/drive/items/{item-id}">client.me.drive.items.<a href="./src/resources/me/drive/items.ts">update</a>(itemID, { ...params }) -> void</code>
- <code title="delete /me/drive/items/{item-id}">client.me.drive.items.<a href="./src/resources/me/drive/items.ts">delete</a>(itemID) -> void</code>
- <code title="get /me/drive/items/{item-id}/content">client.me.drive.items.<a href="./src/resources/me/drive/items.ts">downloadContent</a>(itemID) -> void</code>
