import re
import requests

def check_m3u(url):
    response = requests.get(url)
    if response.status_code == 200:
        content = response.text
        if "#EXTM3U" in content:
            return True
        else:
            return False
    else:
        return False

def check_m3u8(url):
    response = requests.get(url)
    if response.status_code == 200:
        content = response.text
        if "#EXTM3U" in content and "#EXT-X-STREAM-INF" in content:
            return True
        else:
            return False
    else:
        return False

# Ejemplo de uso
url = "https://example.com/list.m3u"
if check_m3u(url):
    print("La lista M3U es válida")
else:
    print("La lista M3U no es válida")

url = "https://example.com/list.m3u8"
if check_m3u8(url):
    print("La lista M3U8 es válida")
else:
    print("La lista M3U8 no es válida")
