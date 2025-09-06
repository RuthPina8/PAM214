import javax.swing.JOptionPane;

public class inicioPAM 
{
    public static void main (String[] args)
    {
        String menu = "\nMenú principal\n\n1. Reglamento POO\n2. Lineamientos Classroom\n3. Fechas de Parciales\n4. Porcentajes por parcial\n5. Salir";

        int opcion = Integer.parseInt(JOptionPane.showInputDialog(null, menu));

        switch (opcion) {
            case 1 :
                JOptionPane.showMessageDialog(null, "Reglamento POO");
                JOptionPane.showMessageDialog(null, "1. Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n2. Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia.\n3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores.\n4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.\n5. Las tareas y trabajos presentarlos en tiempo y forma.\n6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n7. El plagio o copia de trabajos y/o exámenes será condicionado a reprobar la asignatura.\n8. Cualquier deshonestidad académica será sancionada reprobando el parcial.\n9. En caso de indisciplina o falta de respeto, el alumno puede perder derecho a examen.\n10. Uso de laptops y/o dispositivos móviles quedará limitado a uso exclusivo de las actividades.\n11. Prohibido el uso de audífonos durante la clase.\n12. Prohibido comer o tomar líquidos en el salón.\n13. Prohibido sentarse en mesas o columpiarse en sillas.\n14. Todo tema académico debe revisarse primero con el docente, luego con tutor, después con la coordinación y finalmente con la dirección.\n15. Cualquier situación no prevista se tratará con la dirección.\n16. El día de entrega de calificaciones todos los estudiantes deben estar presentes.\n17. Este reglamento entra en vigor después de ser aceptado por mayoría de los estudiantes.");
                break;

            case 2:  
                JOptionPane.showMessageDialog(null, "Lineamientos Classroom");
                JOptionPane.showMessageDialog(null, "Entregar los trabajos para su revisión.\nEntregas en PDF.\nAvisos de clase.\nEntregas autorizadas con retraso, calificación máxima 5.");
                break;

            case 3:
                JOptionPane.showMessageDialog(null, "Fechas de parciales");
                JOptionPane.showMessageDialog(null, "1er Parcial: 01-10-25\n2do Parcial: 05-10-25\n3er Parcial: 03-12-25\nFinal: 08-12-25");
                break;

            case 4:
                JOptionPane.showMessageDialog(null, "Porcentajes por parcial");
                JOptionPane.showMessageDialog(null, "Parcial 1: Conocimiento 40%, Desempeño 20%, Producto 30%, Proyecto 10%\nParcial 2: Conocimiento 40%, Desempeño 20%, Producto 20%, Proyecto 20%\nParcial 3: Conocimiento 20%, Desempeño 10%, Producto 40%, Proyecto 30%");
                break;

            case 5:
                JOptionPane.showMessageDialog(null, "Salir");
                break;     
        }
    }
}
