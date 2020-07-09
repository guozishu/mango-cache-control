# mango-cache-control
通用消息头，缓存机制

### install 
---
> $  npm i -D mango-cache-control

### Usage
---
> 创建一个 cache-control middleware

```javascript
app.use(cacheControl({
    maxAge:100
}));
```

