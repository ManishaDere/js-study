# Optimize Rendering
1. use React.memo - to reduce re-rendering when props are not changed
2. useCallback hooks to cache function definition and reduce extra re-rendering when dependancy is not changed
3. useMemo hook to cache huge calculation results and execute thif fucntions only when dependancy array changed 
4. Avoid passing anonymous functions for ex. onCLick={() => add()}, it will cause extra re-renders
5. Break down larger componnets into smaller so that re-renders become easier
# Efficient State management
1. use useContext only when necessary if context we are updating frequently then try to use redux/ global state
2. use lifting state up only when necessary otherwise it causes extra re-renders
3. Lzy load state - useState(() => initialState()) - try to use lazy loading of state only when necessary 
# Optimize code and assets
1. Code splitting - Use React.lazy to load only necessary code on UI
2. Tree shaking - Ensure our build process is automatically removing unused code webpack, parcel
3. Compress assets - optimize images 
4. try to use png images
# Use Efficient CSS - 
1. try to use best css frameworks like chakra ui or material ui to load css for particular page only and not for whole project
2. Only include styles needed for current view
# Reduce HTTP requests - 
1. bundle, minify - combine and reduce js and css files into single files and minify it
2. try to use react-virtualized or react-window to show how much part needed on UI load only that part
3. Lazy load images using react-lazyload
# Optimize server requests - 
1. for images try to use CDNs
2. Also for static assets try to use CDNs
3. cache http responses using lbraries like ReactQuery
# client side performance tips
1. Use throttle or debounce techniques from clientside to reduce number of fucntion calls
# Use tools like Lighthouse and Profiler
