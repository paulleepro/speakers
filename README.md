# README

## Token Login

Use the URL parameters `?invite=jwt&token=<TOKEN>` as below:

```sh
http://localhost:3000/?invite=jwt&token=eyJpZFRva...<REST OF THE BASE64 TOKEN>...WTVXNFJJRk1qbVREYyJ9
```

## Test token generation

```sh
curl --silent --location --request POST 'http://localhost:3080/api/auth/v1/auth/tokens/grant' \
--header 'Content-Type: application/json' \
--data-raw '{
"username": "manager@test.com",
"password": "password"
}' | base64
```

## Auth usage

```js
// the eventHandler is specific to the app, should be kept in it's own file
const auth = new Auth(eventHandler);
auth.init();

// password login example
auth.passwordLogin("password").then((auth) => {
  console.log(`Login: authenticated=${auth.isAuthenticated()}`);
});

// For future login page without KC template/iframe :)
auth.login("manager@test.com", "password").then((auth) => {
  console.log(`Login: authenticated=${auth.isAuthenticated()}`);
});
```

## Generate Component

```
  yarn gc SomeComponent
```

# TODO


- Tab swipe
- cleanup category page "See All" link

- Talent Video