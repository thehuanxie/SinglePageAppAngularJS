# 2-way, 1-way and 1-time Binding

## 2-way binding
```
    your name:
    <input type ="text" ng-model = "name">
```
This is 2-way binding, which allows users to modify the data

## 1-way binding
```
    <div> Echo: {{ lastName }} </div>
```
This is 1-way binding, users cannot modify the data, but backend, Angular has to generate a watcher for this.

## 1-time binding

```
    <div> Echo: {{ ::lastName }} </div>
```
This is 1-time binding, Angular will create a 1-time watcher and destroy it once the check is done. This is suitable for some value that will not change such as user's last name.
