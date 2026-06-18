# Conclusiones de optimización

Una vez se aplicó memoización al componente ShowPreviewCard para evitar rerenders cuando se apliquen filtros o se realicen búsquedas, se pudo ver en las imágenes claramente cómo se reduce el tiempo de carga de la página al aplicarlos. 

Asímismo también se puede observar cómo incrementan los ms necesarios para la carga inicial de la página.

A continuación, la tabla comparativa:

| Métrica                                | Antes  | Después | Variación       |
| -------------------------------------- | ------ | ------- | --------------- |
| Tiempo total de carga de `BrowsePage`  | 315 ms | 401 ms  | +86 ms (+27.3%) |
| Tiempo de commit durante carga inicial | 36 ms  | 32 ms   | -4 ms (-11.1%)  |
| Tiempo al aplicar filtros              | 85 ms  | 15 ms   | -70 ms (-82.3%) |
