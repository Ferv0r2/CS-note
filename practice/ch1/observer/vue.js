// p.042

function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeekMap<Target, any>
) {
  if (!isObject(target)) {
    if (__DEV__)
      console.warn(`value cannot be made reactive: ${String(target)}`);
    return target;
  }

  // target is alreaedy a Proxy, return it.
  // exception: calling readonly() on a reactive object
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  )
    return target;

  // target already has corresponding Proxy
  const existingProxy = proxyMap.get(target);
  if (existingProxy) return existingProxy;

  // only a whitelist of value types can be observed.
  const targetType = getTargetType(target);
  if (targetType === targetType.INVALID) return target;
  const proxy = new Proxy(
    target,
    targetType === targetType.COLLECTION ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
