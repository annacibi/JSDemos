from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder='calculateArea',
    static_folder='calculateArea',
    static_url_path=''
)

@app.route('/')
def home():
    return render_template('calculate_Area.html')

if __name__ == '__main__':
    app.run(debug=True)