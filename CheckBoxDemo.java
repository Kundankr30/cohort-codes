//CHanges BAckground color
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.Color;
class CheckBoxDemo extends JFrame implements ActionListener
{
    JCheckBox c1, c2, c3;

    CheckBoxDemo()
    {
        c1 = new JCheckBox("Red");
        c2 = new JCheckBox("Green");
        c3 = new JCheckBox("Blue");

        c1.setBounds(50, 50, 100, 30);
        c2.setBounds(50, 90, 100, 30);
        c3.setBounds(50, 130, 100, 30);

        add(c1);
        add(c2);
        add(c3);

        c1.addActionListener(this);
        c2.addActionListener(this);
        c3.addActionListener(this);

        setLayout(null);
        setSize(300, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e)
    {
        if (c1.getModel().isSelected())
            getContentPane().setBackground(Color.RED);
        else if (c2.getModel().isSelected())
            getContentPane().setBackground(Color.GREEN);
        else if (c3.getModel().isSelected())
            getContentPane().setBackground(Color.BLUE);
        else
            getContentPane().setBackground(Color.WHITE);
    }

    public static void main(String[] args)
    {
        CheckBoxDemo c=new CheckBoxDemo();
        c.setVisible(true);
    }
}
