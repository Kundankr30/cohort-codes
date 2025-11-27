import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class MyCounter extends JFrame implements ActionListener {
    JTextField t;
    JButton c,r;
    int count = 0;
    CounterApp() {
        setLayout(null);
        t = new JTextField("0");
        t.setBounds(80, 40, 100, 30);
        c = new JButton("Count");
        r = new JButton("Reset");
        c.setBounds(30, 100, 80, 30);
        r.setBounds(130, 100, 80, 30);
        add(t);
        add(c);
        add(r);
        c.addActionListener(this);
        r.addActionListener(this);
        setSize(250, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == c {
            count++;
            t.setText(String.valueOf(count));
        }
        else if (e.getSource() == r) {
            count = 0;
            t.setText("0");
        }
    }
    public static void main(String args[]) {
        MyCount ob=new MyCounter();
    }
}
