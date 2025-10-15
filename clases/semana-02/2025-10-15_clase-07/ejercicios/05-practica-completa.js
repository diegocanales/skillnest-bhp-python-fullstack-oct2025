/*
Ejercicio: Calculadora de Gastos Semanal

Objetivo:
Integrar todos los conceptos aprendidos en la clase: variables, operadores,
condicionales, bucles y arreglos para crear un programa completo y funcional.

Descripción:
Crea una calculadora que analice los gastos de una semana:
1. Almacenar gastos en un arreglo
2. Calcular el total gastado
3. Calcular el promedio de gasto por día
4. Identificar el gasto más alto
5. Contar cuántos gastos fueron mayores al promedio
6. Imprimir un resumen completo formateado

Habilidades que se practican:
- Arreglos para almacenar datos
- Bucles para recorrer y procesar información
- Variables acumuladoras para totales
- Condicionales para comparaciones
- Operaciones matemáticas
- Formateo de salida con console.log
*/

// ===================================
// DATOS INICIALES
// ===================================
var gastos = [1500, 2300, 890, 1200, 3400, 1800, 950];
var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("   📊 CALCULADORA DE GASTOS SEMANAL");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");


// ===================================
// 1. MOSTRAR GASTOS POR DÍA
// ===================================
console.log("📅 GASTOS POR DÍA:");
console.log("─────────────────────────────");

for (var i = 0; i < gastos.length; i++) {
    console.log(diasSemana[i] + ": $" + gastos[i]);
}

console.log("");


// ===================================
// 2. CALCULAR TOTAL GASTADO
// ===================================
var totalGastado = 0;

for (var i = 0; i < gastos.length; i++) {
    totalGastado += gastos[i];
}

console.log("💰 TOTAL GASTADO EN LA SEMANA:");
console.log("$" + totalGastado);
console.log("");


// ===================================
// 3. CALCULAR PROMEDIO POR DÍA
// ===================================
var promedioDiario = totalGastado / gastos.length;

console.log("📊 PROMEDIO DE GASTO POR DÍA:");
console.log("$" + promedioDiario.toFixed(2));
console.log("");


// ===================================
// 4. IDENTIFICAR GASTO MÁS ALTO
// ===================================
var gastoMaximo = gastos[0];  // Empezamos asumiendo que el primero es el mayor
var diaGastoMaximo = 0;

for (var i = 1; i < gastos.length; i++) {
    if (gastos[i] > gastoMaximo) {
        gastoMaximo = gastos[i];
        diaGastoMaximo = i;
    }
}

console.log("🔝 GASTO MÁS ALTO:");
console.log(diasSemana[diaGastoMaximo] + ": $" + gastoMaximo);
console.log("");


// ===================================
// 5. IDENTIFICAR GASTO MÁS BAJO
// ===================================
var gastoMinimo = gastos[0];
var diaGastoMinimo = 0;

for (var i = 1; i < gastos.length; i++) {
    if (gastos[i] < gastoMinimo) {
        gastoMinimo = gastos[i];
        diaGastoMinimo = i;
    }
}

console.log("🔻 GASTO MÁS BAJO:");
console.log(diasSemana[diaGastoMinimo] + ": $" + gastoMinimo);
console.log("");


// ===================================
// 6. CONTAR GASTOS MAYORES AL PROMEDIO
// ===================================
var gastosAltos = 0;
var diasAltos = [];

for (var i = 0; i < gastos.length; i++) {
    if (gastos[i] > promedioDiario) {
        gastosAltos++;
        diasAltos.push(diasSemana[i]);
    }
}

console.log("⬆️ DÍAS CON GASTOS MAYORES AL PROMEDIO:");
console.log("Cantidad: " + gastosAltos);
console.log("Días: " + diasAltos.join(", "));
console.log("");


// ===================================
// 7. CONTAR GASTOS MENORES AL PROMEDIO
// ===================================
var gastosBajos = 0;
var diasBajos = [];

for (var i = 0; i < gastos.length; i++) {
    if (gastos[i] < promedioDiario) {
        gastosBajos++;
        diasBajos.push(diasSemana[i]);
    }
}

console.log("⬇️ DÍAS CON GASTOS MENORES AL PROMEDIO:");
console.log("Cantidad: " + gastosBajos);
console.log("Días: " + diasBajos.join(", "));
console.log("");


// ===================================
// 8. ANÁLISIS VISUAL CON BARRAS
// ===================================
console.log("📊 GRÁFICO DE GASTOS:");
console.log("─────────────────────────────");

for (var i = 0; i < gastos.length; i++) {
    var dia = diasSemana[i];
    var gasto = gastos[i];
    
    // Crear barra visual (cada ■ representa $500)
    var barras = "";
    var cantidadBarras = Math.round(gasto / 500);
    
    for (var j = 0; j < cantidadBarras; j++) {
        barras += "■";
    }
    
    // Indicador si está sobre o bajo el promedio
    var indicador = "";
    if (gasto > promedioDiario) {
        indicador = " 🔼";
    } else if (gasto < promedioDiario) {
        indicador = " 🔽";
    } else {
        indicador = " ━";
    }
    
    console.log(dia.substring(0, 3) + " $" + gasto + " " + barras + indicador);
}

console.log("");
console.log("Leyenda: Cada ■ = $500 | 🔼 Mayor al promedio | 🔽 Menor al promedio");
console.log("");


// ===================================
// 9. RECOMENDACIONES
// ===================================
console.log("💡 RECOMENDACIONES:");
console.log("─────────────────────────────");

var diferencia = gastoMaximo - gastoMinimo;
console.log("• La diferencia entre tu día más caro y más barato es $" + diferencia);

if (gastoMaximo > promedioDiario * 2) {
    console.log("• ⚠️ Tuviste un día con gasto muy alto (" + diasSemana[diaGastoMaximo] + ")");
}

if (gastosAltos > gastosBajos) {
    console.log("• 📈 La mayoría de días gastaste más del promedio");
} else if (gastosBajos > gastosAltos) {
    console.log("• 📉 La mayoría de días gastaste menos del promedio");
} else {
    console.log("• ⚖️ Tus gastos están balanceados respecto al promedio");
}

console.log("");


// ===================================
// 10. RESUMEN FINAL
// ===================================
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("           📋 RESUMEN FINAL");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Total gastado:        $" + totalGastado);
console.log("Promedio diario:      $" + promedioDiario.toFixed(2));
console.log("Gasto más alto:       $" + gastoMaximo + " (" + diasSemana[diaGastoMaximo] + ")");
console.log("Gasto más bajo:       $" + gastoMinimo + " (" + diasSemana[diaGastoMinimo] + ")");
console.log("Días sobre promedio:  " + gastosAltos);
console.log("Días bajo promedio:   " + gastosBajos);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");


/*
Salida esperada (aproximada):

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📊 CALCULADORA DE GASTOS SEMANAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 GASTOS POR DÍA:
─────────────────────────────
Lunes: $1500
Martes: $2300
Miércoles: $890
Jueves: $1200
Viernes: $3400
Sábado: $1800
Domingo: $950

💰 TOTAL GASTADO EN LA SEMANA:
$12040

📊 PROMEDIO DE GASTO POR DÍA:
$1720.00

🔝 GASTO MÁS ALTO:
Viernes: $3400

🔻 GASTO MÁS BAJO:
Miércoles: $890

⬆️ DÍAS CON GASTOS MAYORES AL PROMEDIO:
Cantidad: 3
Días: Martes, Viernes, Sábado

⬇️ DÍAS CON GASTOS MENORES AL PROMEDIO:
Cantidad: 3
Días: Lunes, Miércoles, Jueves

💡 CONCEPTOS PRACTICADOS:
- Arreglos paralelos (gastos y diasSemana)
- Bucles for para recorrer arreglos
- Variables acumuladoras (totalGastado)
- Búsqueda de máximo y mínimo
- Condicionales para categorizar datos
- Operaciones matemáticas (promedio)
- Formateo de salida con caracteres especiales
- Creación de visualizaciones simples con texto
*/

