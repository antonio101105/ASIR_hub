import http.server
import socketserver
import json
import sys
import os

# Ensure we can import the agent
sys.path.append(os.getcwd())
try:
    from filesystem_agent import FileSystemAgent
except ImportError:
    print("Warning: filesystem_agent.py not found in root.")
    # Dummy class to prevent crash if file missing
    class FileSystemAgent:
        def execute_command(self, cmd): return "Error: Agent not loaded."
        def change_directory(self, path): return "Error: Agent not loaded."
        def list_directory(self): return "Error: Agent not loaded."
        def read_file(self, path): return "Error: Agent not loaded."
        def write_file(self, path, content): return "Error: Agent not loaded."

PORT = 8000
agent = FileSystemAgent()

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/execute':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode('utf-8'))
                command = data.get('command', '')
                
                response_text = ""
                parts = command.split(' ', 1)
                cmd = parts[0].lower()
                arg = parts[1] if len(parts) > 1 else ""

                if cmd == 'cd':
                    response_text = agent.change_directory(arg)
                elif cmd == 'ls':
                    response_text = agent.list_directory()
                elif cmd == 'read':
                    response_text = agent.read_file(arg)
                elif cmd == 'write':
                    if ' ' in arg:
                        filename, content = arg.split(' ', 1)
                        response_text = agent.write_file(filename, content)
                    else:
                        response_text = "Usage: write <filename> <content>"
                elif cmd == 'exec':
                    response_text = agent.execute_command(arg)
                else:
                    # Default to execute_command for unknown commands
                    response_text = agent.execute_command(command)

                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'output': response_text}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            super().do_POST()

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'Serving at port {PORT}')
    httpd.serve_forever()
