from fastapi import FastAPI
import socket
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/scan/{ip}")
def scan_port(ip: str, start: int = 7990, end: int = 8001):
    open_ports = []
    for port in range(start, end):
        try:
            # getaddrinfo to check if the IP address is valid (IPv4 or IPv6)
            infos = socket.getaddrinfo(ip, port, 0, socket.SOCK_STREAM)
            for family, socktype, proto, canonname, sockaddr in infos:
                s = socket.socket(family, socktype, proto)
                s.settimeout(0.5)
                try:
                    s.connect(sockaddr)
                    open_ports.append(port)
                    break  
                except:
                    pass
                finally:
                    s.close()
        except:
            pass
    return {"ip": ip, "open_ports": open_ports}

@app.get("/")
def read_root():
    return {"message": "Welcome to your Local Scanner"}
