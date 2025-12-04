import os
import sys
import subprocess
from pathlib import Path

class FileSystemAgent:
    def __init__(self, initial_path=None):
        """
        Initializes the agent with a starting directory.
        Defaults to the current working directory if none provided.
        """
        self.current_directory = Path(initial_path) if initial_path else Path.cwd()
        if not self.current_directory.exists():
             self.current_directory = Path.cwd()
        print(f"[System] Agent initialized at: {self.current_directory}")

    def change_directory(self, path):
        """
        Changes the current working directory.
        Supports relative and absolute paths.
        """
        try:
            # Handle '..' and other relative paths safely
            target = (self.current_directory / path).resolve()
            
            if target.exists() and target.is_dir():
                self.current_directory = target
                return f"Directory changed to: {self.current_directory}"
            else:
                return f"Error: Directory '{path}' not found."
        except Exception as e:
            return f"Error changing directory: {e}"

    def list_directory(self):
        """
        Lists the contents of the current directory.
        """
        try:
            items = os.listdir(self.current_directory)
            if not items:
                return "Directory is empty."
            
            # Format output for better readability
            output = []
            for item in items:
                item_path = self.current_directory / item
                type_str = "<DIR>" if item_path.is_dir() else "<FILE>"
                output.append(f"{type_str:<8} {item}")
            return "\n".join(output)
        except Exception as e:
            return f"Error listing directory: {e}"

    def read_file(self, path):
        """
        Reads and returns the content of a file.
        """
        try:
            target = (self.current_directory / path).resolve()
            if target.exists() and target.is_file():
                with open(target, 'r', encoding='utf-8') as f:
                    return f.read()
            else:
                return f"Error: File '{path}' not found."
        except Exception as e:
            return f"Error reading file: {e}"

    def write_file(self, path, content):
        """
        Writes content to a file. Overwrites if exists.
        """
        try:
            target = (self.current_directory / path).resolve()
            with open(target, 'w', encoding='utf-8') as f:
                f.write(content)
            return f"Successfully wrote to '{path}'."
        except Exception as e:
            return f"Error writing file: {e}"

    def execute_command(self, command):
        """
        Executes a system command in the current directory.
        Returns stdout + stderr.
        """
        try:
            result = subprocess.run(
                command,
                cwd=self.current_directory,
                shell=True,
                capture_output=True,
                text=True
            )
            output = result.stdout
            if result.stderr:
                output += f"\n[Stderr]:\n{result.stderr}"
            return output.strip()
        except Exception as e:
            return f"Error executing command: {e}"

if __name__ == "__main__":
    agent = FileSystemAgent()
    print("=== FileSystemAgent CLI ===")
    print("Commands: cd <path>, ls, read <file>, write <file> <content>, exec <cmd>, exit")
    
    while True:
        try:
            user_input = input(f"\n{agent.current_directory}> ").strip()
            if not user_input:
                continue
            
            if user_input.lower() in ['exit', 'quit']:
                print("Shutting down agent.")
                break
            
            parts = user_input.split(' ', 1)
            cmd = parts[0].lower()
            arg = parts[1] if len(parts) > 1 else ""

            if cmd == 'cd':
                print(agent.change_directory(arg))
            elif cmd == 'ls':
                print(agent.list_directory())
            elif cmd == 'read':
                print(agent.read_file(arg))
            elif cmd == 'write':
                if ' ' in arg:
                    filename, content = arg.split(' ', 1)
                    print(agent.write_file(filename, content))
                else:
                    print("Usage: write <filename> <content>")
            elif cmd == 'exec':
                print(agent.execute_command(arg))
            else:
                print(f"Unknown command: {cmd}")
                
        except KeyboardInterrupt:
            print("\nExiting...")
            break
        except Exception as e:
            print(f"Critical Error: {e}")
