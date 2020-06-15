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

## Generate Component

```
  yarn gc SomeComponent
```

# TODO


- Tab swipe
- cleanup category page "See All" link

- Talent Video