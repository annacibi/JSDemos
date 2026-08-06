import re

from flask import Flask, flash, redirect, render_template, request, url_for
app = Flask(__name__)
app.secret_key = 'dev-secret-key'

@app.route('/')
def home():
    return render_template('message.html')


@app.route('/check-name', methods=['POST'])
def check_name():
    # Current pattern uses flash + redirect (POST-Redirect-GET).
    # Simpler alternative: return the template directly after POST.
    # Example:
    # role = request.form.get('role', '').strip()
    # if not role:
    #     return render_template('message.html', message='Please enter a role.', message_type='error')
    # return render_template('message.html', message=f'Role accepted: {role}', message_type='success')
    # In message.html you would render:
    # {% if message %}<p class="{{ message_type }}">{{ message }}</p>{% endif %}
    role = request.form.get('role', '').strip()

    if not role:
        flash('Please enter a role.', 'error')
        return redirect(url_for('home'))

    if len(role) > 50:
        flash('Role must be 50 characters or fewer.', 'error')
        return redirect(url_for('home'))

    if not re.fullmatch(r"[A-Za-z][A-Za-z\s'-]*", role):
        flash("Role can only contain letters, spaces, apostrophes, and hyphens.", 'error')
        return redirect(url_for('home'))

    normalized_role = role.lower()
    
    flash(f'{normalized_role}', 'success')

    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)