import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Factorial extends JFrame implements ActionListener {
    JTextField t1, t2;
    JButton b;
    Factorial() {
        setLayout(null);
        JLabel l1 = new JLabel("Enter Number:");
        JLabel l2 = new JLabel("Factorial:");
        t1 = new JTextField();
        t2 = new JTextField();
        t2.setEditable(false);
        b = new JButton("Factorial");
        l1.setBounds(30, 30, 100, 30);
        t1.setBounds(150, 30, 100, 30);
        l2.setBounds(30, 80, 100, 30);
        t2.setBounds(150, 80, 100, 30);
        b.setBounds(100, 130, 120, 30);
        add(l1);
       
    public void actionPerformed(ActionEvent e) {
        int n = Integer.parseInt(t1.getText());
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }
        t2.setText(String.valueOf(fact));
    }
    public static void main(String args[]) {
        Factorial f=new Factorial();
    }
}
