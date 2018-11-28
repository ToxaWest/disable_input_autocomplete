# disable input autocomplete
Disable browser autocomplete without jQuery and 'autocomplete="off"'

# How to use

1. Require 'disableAutocomplete.min.js' to your project
2. Pass the input id to the 'disableInputAutocomplete' class and call the 'disable()' method. 

# Example
```html
<input name="username" id="myId"/>
<script>
  new disableInputAutocomplete('myId').disable();
</script>
```
