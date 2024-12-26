The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties.  Here's the corrected code:

```javascript
const MyComponent = ({ user }) => {
  return (
    <View>
      <Text>{user?.name ?? 'Guest'}</Text> 
    </View>
  );
};
```

Optional chaining (`user?.name`) short-circuits the evaluation if `user` is null or undefined, preventing the error. The nullish coalescing operator (`?? 'Guest'`) provides a default value ('Guest' in this case) if `user?.name` is null or undefined.