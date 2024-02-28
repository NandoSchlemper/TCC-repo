import requests, json

response = requests.get("https://pokeapi.co/api/v2/pokemon/ditto") # If have auth, (..., auth=('user', 'pass'))

def better_print(obj):
    text = json.dump(obj, sort_keys=True, indent=4)
    print(text)

print(response.json())