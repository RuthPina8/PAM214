import javax.swing.JOptionPane;
public class inicioPAM 
{
public static void main (String[] args)
{
    String menu = "\nMenú principal\n"
     "\n1. Reglamento POO"
     "\n2. Lineamientos Classroom"
     "\n3. Fechas de Parciales"
     "\n4. Porcentajes por parcial \n";
 int opcion = Integer.parseInt(JOptionPane.showInputDialog(null, "\nMenú principal\n 1. Reglamento POO\n 2.Lineamientos Classroom\n 3.Fechas de parciales\n 4. Porcentajes por Parcial\n 5. Salir\n" ));
 switch (opcion) {
     case 1 :
         JOptionPane.showInputDialog(null, "Reglamento POO");
         break;
     case 2:  
         JOptionPane.showInputDialog(null, "Lineamientos Classroom");
         break;
     case 3:
        JOptionPane.showInputDialog(null, "Fechas de parciales");
        break;
    case 4:
        JOptionPane.showInputDialog(null, "Porcentajes por parcial");
        break;
    case 5:
        JOptionPane.showInputDialog(null, "Salir"); 
        break;     
 }
 
}
}