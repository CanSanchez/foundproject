import React from 'react';

export default function Textbox({label= ""}) {
    return (
      <div>
        <form>
            <label> {label}
            <input type="text" name="name" />
            </label>
        </form>
      </div>
    );
  }

