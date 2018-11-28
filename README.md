# disable input autocomplete
Disable browser autocomplete without jQuery and 'autocomplete="off"'

# How to use

1. Require 'disableAutocomplete.min.js' to your project or import index.js.
2. Pass the input id to the 'disableInputAutocomplete' class and call the 'disable()' method. 


# Example
```htnl
import {disableInputAutocompleteClass} from "disable_input_autocomplete";
```
```html
<input name="username" id="myId"/>
<script>
  new disableInputAutocompleteClass('myId').disable();
</script>
```

# Or

```htnl
import {disableInputAutocomplete} from "disable_input_autocomplete";
```
```html
<input name="username" id="myId"/>
<script>
  disableInputAutocomplete('myId');
</script>
```