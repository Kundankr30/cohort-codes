import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.Color;

class MyColor extends JFrame implements ActionListener
{
    JButton b;

    MyColor()
    {
        JLabel l = new JLabel("My Label:");
        b = new JButton("Push");

        b.setBounds(80,70,100,40);
        l.setBounds(10,70,100,30);

        setLayout(null);   // Keep layout BEFORE adding components
        add(l);
        add(b);

        b.addActionListener(this);

        setSize(200,300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent ob)
    {
        if (ob.getSource() == b) {
            getContentPane().setBackground(Color.GREEN);
        }
    }

    public static void main(String args[])
    {
        MyColor m1 = new MyColor();
        m1.setVisible(true);
    }
}
