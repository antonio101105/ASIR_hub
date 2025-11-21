import http.server
import socketserver
import webbrowser
import os

PORT = 8000

# Ensure we are serving from the script's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

print(f"Serving at http://localhost:{PORT}")
print("Press Ctrl+C to stop the server.")

# Optional: Open browser automatically
# webbrowser.open(f"http://localhost:{PORT}")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
