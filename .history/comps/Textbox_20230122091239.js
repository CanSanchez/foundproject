import React from 'react';

export default function Textbox() {
    return (
      <div>
        <form>
            <label> Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

